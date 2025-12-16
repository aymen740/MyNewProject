
function App() {
    return <form>
        <CGUCheckbox checked={undefined} />
        <button>Envoyer le formulaire</button>
        </form>

}

function CGUCheckbox ({checked}): any {
return <div>
    <label>
        <input type="checkbox" checked={checked}/>
        Accepter les conditions d'utilisation
        </label>
        </div>

}