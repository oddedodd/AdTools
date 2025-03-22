import { useState } from "react";

function ScriptInput( { onScriptSubmit } ) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onScriptSubmit(inputValue);
    };

    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-bold">Sjekk innholdet i script-tag</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Lim inn script-tag her"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Vis innhold</button>
        </form>
        </div>
    );
    
}

export default ScriptInput;
    

