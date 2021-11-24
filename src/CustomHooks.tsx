import { useLocalStorage } from './useLocalStorage';
import { useToggle } from './useToggle';
import { useDocumentTitle } from './useDocumentTitle';
import { useLogger } from './useLogger';

export function CustomHooks() {
    // eslint-disable-next-line 
    const [state, setstate, remove] = useLocalStorage('key1', 'value1');
    const [isToggle, setIsToggle] = useToggle(false);
    useDocumentTitle('custom title1');
    useLogger('Custom Hook Logger-', 'log value using the custom hook');

    return (
        <>  Local storage value = {state}
            <div>
                <button onClick={() => { setstate('updated value1') }}>Update localstorage value</button>
                <button onClick={() => { remove() }}>Remove localstorage value</button>
            </div>
            Toggle value: {isToggle ? 'True' : 'False'}
            <button onClick={() => { setIsToggle() }}>Toggle value</button>


        </>
    )
}