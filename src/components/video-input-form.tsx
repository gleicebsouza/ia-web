import { Label } from '@radix-ui/react-label'
import { Separator } from '@radix-ui/react-separator'
import { FileVideo, Upload } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { ChangeEvent, useState, useMemo, useRef, FormEvent } from 'react'
import { loadingFFmpeg } from '@/lib/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

export function VideoInputForm() {
  const [videoFile, setVideoFile] = useState<File | null>(null) //aramazenar estado do video

  const promptInputRef =
    useRef<HTMLTextAreaElement>(
      null
    ) /* Hooks,evitar uma nova renderização dentro da aplicação.Uso de  tipagem global do typescript */

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.currentTarget
    if (!files) {
      return
    }
    const selectedFile = files[0] // files.item(0)
    setVideoFile(selectedFile)
  }

  async function convertVideoToAudio(video: File) {
    console.log('convert started.')

    const ffmpeg = await loadingFFmpeg()

    await ffmpeg.writeFile('input.mp4', await fetchFile(video)) // inserir algo dentro do contexto do fmpeg

    // ffmepg.on('log', log => {
    //   console.log(log)
    // })

    ffmpeg.on('progress', progress => {
      console.log('Convert progress:' + Math.round(progress.progress * 100))
    })
    await ffmpeg.exec([
      '-i',
      'input.mp4',
      '-map',
      '0:a',
      '-b:a',
      '20k',
      '-acodec',
      'libmp3lame',
      'output.mp3'
    ])

    const data = await ffmpeg.readFile('output.mp3')

    const audioFileBlob = new Blob([data], { type: 'audio/mpeg' })
    const audioFile = new File([audioFileBlob], 'audio.mp3', {
      type: 'audio/mpeg'
    })
    console.log('Convert finished.')

    return audioFile
  }

  //promisse

  async function handleUploadVideo(event: FormEvent<HTMLFormatElement>) {
    event.preventDefault()

    const prompt = promptInputRef.current?.value

    if (!videoFile) {
      return
    }
    // converter vídeo em audio no browser - web assembly
    const audioFile = await convertVideoToAudio(videoFile)
    console.log(audioFile)
  }

  const previewURL = useMemo(() => {
    // hook
    if (!videoFile) {
      return null //error message
    }
    return URL.createObjectURL(videoFile) //criar uma pré-visualização
  }, [videoFile]) //array de dependência

  return (
    <form onSubmit={handleUploadVideo} className="space-y-6">
      <label
        htmlFor="video"
        className=" relative border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        {previewURL ? (
          // 'Aqui acho que tem um video !'
          <video
            src={previewURL}
            controls={false}
            className="pointer-events-none absolute inset-0"
          />
        ) : (
          <>
            <FileVideo className="w-4 h-4" />
            Selecione o video
          </>
        )}
      </label>
      <input
        type="file"
        id="video"
        accept="video/mp4"
        className="sr-only"
        onChange={handleFileSelected}
      />
      <Separator className="border" />
      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">prompt de transcrição</Label>
        <Textarea
          ref={promptInputRef}
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="inclua palavras chaves mencionadas no vídeo separadas por vírgula (,)"
        />
      </div>
      <Button type="submit" className="w-full">
        Carregar vídeo
        <Upload className=" w-4 h-4 ml-3" />
      </Button>
    </form>
  )
}
