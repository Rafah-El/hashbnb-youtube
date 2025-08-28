import React from 'react'

const item = () => {
  return (
    <div className="flex flex-col gap-2">
        <img 
        src="https://a0.muscache.com/im/pictures/a90731aa-9a50-413d-bb4f-40cc4e869366.jpg?im_w=720" alt="Imagem da acomodação" 
        className="aspect-square object-cover rounded-2xl"
        />
        
        <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
            Cobertura, duplex, em frente à Praia das Dunas, Cabo Frio. As três suítes com ar condicionado. TV na suíte master e sala, com Sky na sala. Cozinha equipada. Wi-Fi de 120mbs da Vivo Fibra. Piscina e churrasqueira privativas. Estacionamento para dois carros dentro do prédio. Com uma área externa com vista panorâmica da Praia das Dunas, em Cabo Frio. O apartamento conta com três suítes e mais um banheiro social, piscina e churrasqueira privativas, com uma área externa com vista panorâmica da Praia das Dunas. Bairro calmo. Na rua lateral você encontra uma padaria que oferece café da manhã e alguns restaurantes. 3-5min da Praia do Forte (indo de carro). Cobertura fica no 4º andar.
        </p>
         </div>

            <p>
            <span class="font-semibold">R$ 550 por noite</span>
            </p>
    </div>
  )
}

export default item 