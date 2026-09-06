function Footer(){
return(
    <>
    <footer className="bg-black text-white flex flex-row p-20">
        <div className="p-5"> 
            <img src='/Logo.svg'></img>
            <p>Nous sommes une Boutique qui<br></br> vend tous accessoires Tech</p>
        </div>
        <table className="">
        <tr>
            <th >Services</th>
            <th >Assistance a l'Achat</th>
        </tr>

        <tr>
            <td className="pl-15">Programme Bonus</td>
            <td className="pl-20">Rechercher Commande</td>
            
        </tr>
        <tr>
            <td className="pl-15">Cartes Cadeau</td>
            <td className="pl-20">Termes de Livraison</td>
        </tr>
        <tr>
            <td className="pl-15">Credit & Paiement</td>
            <td className="pl-20">Echange & Remise</td>
        </tr>
        <tr>
            <td className="pl-15">Service Contacts</td>
              <td className="pl-20">Garantie</td>
        </tr>
        <tr>
            <td className="pl-15">Recharger Compte</td>
            <td className="pl-20">Questions Frequemment Posees</td>
        </tr>
        <tr>
            <td className="pl-15">Paiement</td>
            <td className="pl-20">Utilisation du site</td>
            
        </tr>
        </table>
    </footer>
    </>

)
}

export default Footer