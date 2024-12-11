import React, { useState } from "react";
import '../../styles/styleFormularz.css'

const Formularz = () => {
    const [imie, setImie] = useState('');
    const [rola, setRola] = useState('');
    const [aktywny, setAktywny] = useState(true);
    const rolaMap = {
        '' : "Nie wybrano",
        '1': "Administrator",
        '2': "Moderator",
        '3': "Użytkownik"
    };
    const handleZapis = (e) => {
        e.preventDefault();
        console.log('imie: '+ imie +'; rola: '+rola+'; aktywny: '+aktywny+'; pełna nazwa roli: '+rolaMap[rola]+'')
    }

    return (
        <form className="p-5 rounded-5">
            <div className="mb-3">
                <label className="form-label">Imię użytkownika</label>
                <input className="form-control" type="text" value={imie} onChange={(e)=>setImie(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Rola</label>
                <select className="form-select" value={rola} onChange={(e)=>setRola(e.target.value)}>
                    <option value=""></option>
                    <option value="1">Administrator </option>
                    <option value="2">Moderator </option>
                    <option value="3">Użytkownik </option>
                </select>
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label">Aktywny użytkownik</label>
                <input className="form-check-input" type="checkbox" checked={aktywny} onChange={(e)=>setAktywny(e.target.checked)}/>
            </div>
            <button className="btn btn-primary w-100" type="submit" onClick={handleZapis}>Zapisz</button>
        </form>
    );
}

export default Formularz;