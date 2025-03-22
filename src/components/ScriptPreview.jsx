function ScriptPreview( { scriptContent } ) {
    console.log(scriptContent);

    return (
       <>
       <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100">
        <h2 className="text-lg font-bold mb-2">Innhold i script-tag</h2>
       </div>
       <div dangerouslySetInnerHTML={{ __html: scriptContent }} />
       </>
    );
}

export default ScriptPreview;