const entry = './src/app/App.jsx'

await printBunTranspiledAppFile()
// await printAppReturnValue()

async function printBunTranspiledAppFile() {
    const tsconfig = Bun.file('./tsconfig.json')
    const transpiler = new Bun.Transpiler({
        loader: 'jsx',
        autoImportJSX: true,
        platform: 'bun',
        tsconfig: await tsconfig.text()
    })
    const entryContents = Bun.file(entry)
    const result = transpiler.transformSync(await entryContents.text(), 'jsx')
    console.log(result)
}

async function printAppReturnValue() {
    const App = (await import(entry)).default
    console.log(App())
}
