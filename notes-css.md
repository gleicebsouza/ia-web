/_ o que cada classe representa dentro do css
Tailwind _ 4
\*/

/_ using separador pnpm dlx shadcn-ui@latest add separator
_/

/_ div className= "min-h-screen flex flex-col"_/
.min-h-screen {
min-height: 100vh;
}
.flex {
display: flex;
}
.flex-col {
flex-direction: column;
}

/_div className="px-6 py-3 flex items-center justify-between border-b" _/
.px-6 {
padding-left: 1.5rem/_ 24px _/;
padding-right: 1.5rem/_ 24px _/;
}
.py-3 {
padding-top: 0.75rem/_ 12px _/;
padding-bottom: 0.75rem/_ 12px _/;
}
.flex {
display: flex;
}
.items-center {
align-items: center;
}
.justify-between {
justify-content: space-between;
}
.border-b {
border-bottom-width: 1px;
}
/_h1 className="text-xl font-bold" _/
.text-xl {
font-size: 1.25rem/_ 20px _/;
line-height: 1.75rem/_ 28px _/;
}
.font-bold {
font-weight: 700;
}

/_ div className="flex items-center gap-3" _/
.flex{
display:flex;
}
.items-center{
align-items: center;
}
.gap-3 {
gap: 0.75rem/_ 12px _/;
}

/_ span className="text-sm text-muted-foreground " _/
.text-sm {
font-size: 0.875rem/_ 14px _/;
line-height: 1.25rem/_ 20px _/;
}
//facilita para addicionar o tema light
.text-muted-foreground {
color: hsl(var(--muted-foreground));
}
.text-zinc-400 {
--tw-text-opacity: 1;
color: rgb(161 161 170 / var(--tw-text-opacity));
}

//separator
.h-6 {
height: 1.5rem/_ 24px _/;
}

/_ Github className="w-4 h-4 mr-2" _/

.w-4 {
width: 1rem/_ 16px _/;
}
.h-4 {
height: 1rem/_ 16px _/;
}
.mr-2 {
margin-right: 0.5rem/_ 8px _/;
}

//============== main ===========
/_ main className="flex-1 p-6 flex gap-6 " _/
.flex-1 {
flex: 1 1 0%;
}
.p-6 {
padding: 1.5rem/_ 24px _/;
}
.flex {
display: flex;
}
.gap-6 {
gap: 1.5rem/_ 24px _/;
}

//div className="flex flex-col flex-1 gap-4"
.flex{
display:flex;
}
.flex-col {
flex-direction: column;
}
.flex-1 {
flex: 1 1 0%;
}
.gap-4 {
gap: 1rem/_ 16px _/;
}
//div className="grid grid-rows-2 gap-4 flex-1
.flex{
display: flex;
}
.grid-rows-2 {
grid-template-rows: repeat(2, minmax(0, 1fr));
}
.gap-4 {
gap: 1rem/_ 16px _/;
}
.flex-1 {
flex: 1 1 0%;
}

// textarea
.resize-none { // não permite redimensionar o textarea
resize: none;
}
.p-4 {
padding: 1rem/_ 16px _/;
}
.leading-relaxed {
line-height: 1.625;
}

// p
.text-sm {
font-size: 0.875rem/_ 14px _/;
line-height: 1.25rem/_ 20px _/;
}
.text-muted-foreground {
color: hsl(var(--muted-foreground));
}

//aside
.w-80 {
width: 20rem/_ 320px _/;
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
--tw-space-y-reverse: 0;
margin-top: calc(1.5rem/_ 24px _/ _ calc(1 - var(--tw-space-y-reverse)));
margin-bottom: calc(1.5rem/_ 24px _/ _ var(--tw-space-y-reverse));
}
.text-muted-foreground {
color: hsl(var(--muted-foreground));
}
.hover\:bg-primary\/5:hover {
background-color: hsl(var(--primary) / 0.05);
}
.leading-relaxed {
line-height: 1.625;
}
.ml-2 {
margin-left: 0.5rem/_ 8px _/;
}
