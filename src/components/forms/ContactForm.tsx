import { useState } from 'react';
import clsx from 'clsx';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');
    const [clicked, setClicked] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        // POST para API externa...
        console.log('Enviando...');
        setStatus('done');
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input name="email" type="email" className="border rounded px-3 py-2" />
            <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
            </button>
            <button type="button" onClick={() => setClicked(!clicked)} className={clsx("bg-blue-600  text-white rounded px-4 py-2", clicked && "bg-red-500")}>
                Clique aqui
            </button>
        </form>
    );
}