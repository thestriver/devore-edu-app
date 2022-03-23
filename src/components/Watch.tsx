import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { YoutubeEmbed } from './YoutubeEmbed'
import { Modal } from './Modal'
import { Popup } from './Popup'

type metamaskProps  = {
    account: string
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Watch: React.FC<metamaskProps> = ({account}) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  let [categories] = useState({
    'Stage 1 💸 ': [
      {
        id: 1,
        title: 'What is a Blockchain?',
        subtitle: 'Seeking Prosperity For All',
        embedId: '6WG7D47tGb0',
        comment: '1. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i'

      }
    ],
    'Stage 2 🪙 ': [
      {
        id: 1,
        title: 'What is a dApp?',
        subtitle: 'Decentralized Applications',
        embedId: 'F50OrwV6Uk8',
        comment: '2. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i'
      }
    ],
    'Stage 3 🏛️ ': [
      {
        id: 1,
        title: 'What is a Token used for?',
        subtitle: 'Digital Currencies',
        embedId: 'XEBEmj5Z_Tc',
        comment: '3. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i'
      },
    ],
    'Stage 4 ⛓️ ': [
        {
          id: 1,
          title: 'Building Your First dApp',
          subtitle: 'Programmable Smart Contracts',
          embedId: 'coQ5dg8wM2o',
          comment: '4. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i'
        },
      ],
      'Stage 5 💰 ': [
        {
          id: 1,
          title: 'Earn With Crypto',
          subtitle: 'Financial Inclusion ',
          embedId: '_ppvbTxHDFw',
          comment: '5. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i'
        },
    ],
  })

  return (
     <>
        <h1 className='py-5
                      text-3xl
                      font-bold
                      leading-none
                      tracking-tighter
                      text-white
                      md:text-xl
                lg:text-2xl'>Hi! {account}</h1>
        <div className="mx-auto w-full lg:max-w-[1500px] px-2 py-16 sm:px-0">
        <Tab.Group vertical>
        <Tab.List className="flex p-1 space-x-20 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-green-600 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2  ring-opacity-60',
                  selected
                    ? 'bg-gray-100 shadow'
                    : 'text-blue-100 hover:bg-black hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-black shadow rounded-md p-3',
                'focus:outline-none'
              )}
            >
              <div>
                {posts.map((post) => (
                 <div>
                    <div
                    key={post.id}
                    className="relative text-gray-200 p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h1 className=" text-left text-2xl pb-5 font-medium leading-5">
                      {post.title}
                    </h1>

                    <YoutubeEmbed embedId={post.embedId} />

                    <h3 className=" text-left text-xl py-2  font-medium leading-5">
                      {post.subtitle}
                    </h3>
                    
                    <p className='text-left py-3 font-normal leading-5'>
                        {post.comment}
                    </p>
                  </div>
                  
                 </div>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

        <button className='
                      px-5
                      py-3
                      text-base
                      font-bold
                      text-white
                      bg-green-600
                      border border-transparent
                      rounded-lg
                      shadow
                      hover:bg-green-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                      sm:px-10' onClick={() => {setShowModal(true)}} >Claim Gift</button>
        {showModal ?
          <Popup />
        : null}
        </div>
      
       
       


        {/* <div className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-0">
            <Tab.Group vertical>
            <Tab.List>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Tab>Tab 4</Tab>
                <Tab>Tab 5</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                1At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i 
                </Tab.Panel>
                <Tab.Panel>
                2At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i 
                </Tab.Panel>
                <Tab.Panel>
                3At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti i blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. anditiis praesentium voluptatum deleniti atque corrupti i 
                </Tab.Panel>
            </Tab.Panels>
            </Tab.Group>
        </div> */}
     </> 
    
  )
}
