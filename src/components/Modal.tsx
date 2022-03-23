import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

  return (
    <>
        <section className="shadow-2xl rounded-3xl">
    <div className="p-8 text-center sm:p-12">
        <p className="text-sm font-semibold tracking-widest text-pink-500 uppercase">Your order is on the way</p>

        <h5 className="mt-6 text-3xl font-bold">Thanks for your purchase, we're getting it ready!</h5>

        <a className="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl" href="">
        Track Order
        </a>
    </div>
    </section>
      
    </>
  )
}
