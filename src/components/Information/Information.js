const Information = () => {
    return(
        <section id="dashboard-page" className="dashboard">
            <h3><span>PAWSITIVE CAT-TITUDE </span></h3>
            <hr size="10" width="50%" color="black" />
            <section id="my-pets-page" className="my-pets">
                <h2 id="find-and-adopt">Here you'll find everything that you might need when choosing a kitten.</h2>
            </section>

            <section className="my-pets">
                <ul className="my-pets-list">
                    <li className="informationPet">
                    {/* <li className="otherPet"> */}
                        <p className="informationImg"><img src="/images/information-cat1.jpg" /></p>
                        <a id="button-information" href="/picking">Guide for picking a cat</a>
                    </li>
                    <li className="informationPet">
                        <p className="informationImg"><img src="/images/information-cat2.jpg" /></p>
                        <a id="button-information" href="/caring">Guide for taking care of a cat</a>

                    </li>             
                </ul>                
            </section>
        </section>
    )
}

export default Information;