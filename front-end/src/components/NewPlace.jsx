import { useState } from 'react'
import Perks from './Perks';
 
 const NewPlace = () => {
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [photos, setPhotos] = useState("");
    const [description, setDescription] = useState("");
    const [extras, useExtras] = useState("");
    const [price, setPrice] = useState("");
    const [checkin, setCheckin] = useState("");
    const [checkout, setCheckout] = useState("");
    const [guests, setGuests] = useState("");
   

    const handleSubmit = (e) => {
      e.preventDefault();

      // const newPlace = await axios.post('/places', {

      // })


    };

   return (
     <form onSubmit={handleSubmit} className='w-full  flex flex-col gap-6 px-8'>
        <div className='flex flex-col gap-1'>
            <label htmlFor='title' className='ml-2 text-2xl font-bold'>Título</label>
            <input type="text" placeholder='Digite o título do seu anúncio' className='rounded-full border border-gray-300 py-2 px-4'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            
        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor='city' className='ml-2 text-2xl font-bold'>Cidade e País</label>
            <input type="text" placeholder='Digite a cidade e país do seu anúncio' className='rounded-full border border-gray-300 py-2 px-4'
            id='city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
        </div>

        <div className='flex flex-col gap-1'>
            <label htmlFor='photos' className='ml-2 text-2xl font-bold'>Fotos</label>

            <div className='flex gap-2'> 
            <input type="text" placeholder='Adicione uma foto pelo link dela' className='rounded-full border border-gray-300 py-2 px-4 grow'
            id='photos'
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
            /> 
            <button className='transition hover:bg-gray-200 rounded-full border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer'>Enviar foto</button>
            </div>

             <div className='grid grid-cols-5 gap-4 mt-2'>
              <label htmlFor="file" className='items-center justify-center flex gap-2 aspect-square rounded-2xl border border-gray-300 cursor-pointer'><input type="file" id="file" className='hidden' />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                Upload
              </label>
                
             </div>
        </div>

        <div className='flex flex-col gap-1'>
            <label 
            htmlFor='description' 
             className='ml-2 text-2xl font-bold'>Descrição</label>
            <textarea 
            placeholder='Digite a descrição do seu anúncio' 
            className='rounded-2xl border border-gray-300 py-2 px-4 h-56 resize-none'
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>

<div className='flex flex-col gap-1'>
            
        <div className='flex flex-col gap-1'>
            <label 
            htmlFor='perks' 
            className='ml-2 text-2xl font-bold'>Comodidades
            </label>

  
        </div>
        
        <Perks />
        
        <label 
            htmlFor='extras' 
             className='ml-2 text-2xl font-bold'>Informações Extras</label>
            <textarea 
            placeholder='Digite a descrição do seu anúncio' 
            className='rounded-2xl border border-gray-300 py-2 px-4 h-56 resize-none'
            id='extras'
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
            />
        </div>
        

            <div className='flex flex-col gap-1'>
  <h2 className='ml-2 text-2xl font-bold'>Restrições e Preço</h2>

  {/* GRID DOS CAMPOS */}
  <div className='grid grid-cols-4 gap-6'>
    
    <div className='flex flex-col gap-2'>
      <label className="ml-2 text-xl font-bold" htmlFor="price">
        Preço
      </label>
      <input
        type="number"
        placeholder="500"
        className="rounded-full border border-gray-300 py-2 px-4"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>

    <div className='flex flex-col gap-2'>
      <label className="ml-2 text-xl font-bold" htmlFor="checkin">
        Checkin
      </label>
      <input
        type="text"
        placeholder="16:00"
        className="rounded-full border border-gray-300 py-2 px-4"
        id="checkin"
        value={checkin}
        onChange={(e) => setCheckin(e.target.value)}
      />
    </div>

    <div className='flex flex-col gap-2'>
      <label className="ml-2 text-xl font-bold" htmlFor="checkout">
        Checkout
      </label>
      <input
        type="text"
        placeholder="12:00"
        className="rounded-full border border-gray-300 py-2 px-4"
        id="checkout"
        value={checkout}
        onChange={(e) => setCheckout(e.target.value)}
      />
    </div>

    <div className='flex flex-col gap-2'>
      <label className="ml-2 text-xl font-bold" htmlFor="guests">
        N° convidados
      </label>
      <input
        type="number"
        placeholder="4"
        className="rounded-full border border-gray-300 py-2 px-4"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
    </div>

  </div>
</div>
<button 
className='hover:bg-primary-500 bg-primary-400 min-w-44 px-4 rounded-full py-2 cursor-pointer text-white transition'>Salvar informações
</button>
</form> 
)
 }
export default NewPlace;