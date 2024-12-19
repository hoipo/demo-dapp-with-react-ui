import {TonConnectButton} from "@tonconnect/ui-react";
import './header.scss';
import { useCallback, useState } from "react";

export const Header = ({ initValueTonProof }: { initValueTonProof: boolean}) => {
    const [enabledTonProof, setEnabledTonProof] = useState(initValueTonProof);

    const handleTonProofChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEnabledTonProof(e.target.checked);
        if (e.target.checked) {
            window.location.search = window.location.search + '&enableTonProof=true';
        } else {
            window.location.search = window.location.search.replace('&enableTonProof=true', '');
        }
    }, []);

    return <header>
        <span>My App with React UI</span>
        <span>
            <label>
                Ton-Proof
                <input type="checkbox" checked={enabledTonProof} onChange={handleTonProofChange} />
            </label>
            <TonConnectButton />
        </span>
    </header>
}
