const ForAdoption = () => {
    return(
        <section id="dashboard-page" className="dashboard">
            <h3><span>PAWSITIVE CAT-TITUDE </span></h3>
            <hr size="10" width="50%" color="black" />
            <section id="my-pets-page" className="my-pets">
                <h2 id="find-and-adopt">On this page you can find all of our kittens ready for adoption!</h2>
            </section>

            <section className="my-pets">
                <ul className="my-pets-list">
                    <li className="otherPet">
                        <p className="img"><img src="/images/forAdoption1.jpg" /></p>
                        <p>
                            <div>Ivancho, 5 years old, Sofia</div>
                        </p>
                    </li>
                    <li className="otherPet">
                        <p className="img"><img src="/images/forAdoption2.jpg" /></p>
                        <p>
                            <div>Andy, 2 months old, Plovdiv</div>
                        </p>
                    </li>                  
                </ul>
                <ul className="my-pets-list">
                    <li className="otherPet">
                        <p className="img"><img src="/images/forAdoption3.jpg" /></p>
                        <p>
                            <div>Bobi, 2 years old, Ruse</div>
                            
                        </p>
                        <small>Big lovable cat. Will need extra love and attention.</small>
                    </li>
                    <li className="otherPet">
                        <p className="img"><img src="/images/forAdoption4.jpg" /></p>
                        <p>
                            <div>Fluffy, 8 months old, Varna</div>
                        </p>
                        <small>Sweet cat waiting for her forever family.</small>
                    </li>
                    <li className="otherPet">
                        <p className="img"><img src="/images/forAdoption5.jpg" /></p>
                        <p>
                            <div>Olive, 5 months old, Sofia</div>
                        </p>
                        <small>Olive will steal the heart of anyone that decides to adopt her.</small>
                    </li>                    
                </ul>
            </section>
            </section>
        
    )
}

export default ForAdoption;