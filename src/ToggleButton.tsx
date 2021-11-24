import { useState } from "react";

export function ToggleButton() {
    const [checked, toggleButton] = useState(false);
    return (<div>
        <input type="checkbox"
            checked={checked}
            onClick={(e: any) => toggleButton(e.target.checked)}
        />Toggle with state management.
    </div>)
}