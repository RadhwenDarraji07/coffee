import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

// Import the image
import coffeeImage from '../assets/images/coffeehere.png'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '/', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '/', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '/', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '/', icon: ArrowPathIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '/', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/', icon: PhoneIcon },
]

export default function ProductList() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <p>🎀 𝒲𝒽𝓎 𝓃♡𝓉 🎀</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="/prods" className="text-sm font-semibold leading-6 text-gray-900">
              Products
            </a>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Features
            </a>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Marketplace
            </a>
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/prods"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </a>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in 
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {/* New section with text and animated image */}
      <section className="bg-[#684631] text-white py-16 px-6 relative">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-2xl font-bold mb-4">Why not try your daily dose of coffee bliss.</h2>
          <p className="text-lg mb-4">
            𝘈𝘵 𝘊𝘰𝘧𝘧𝘦𝘦 𝘚𝘱𝘢𝘤𝘦, 𝘸𝘦 𝘣𝘦𝘭𝘪𝘦𝘃𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘮𝘢𝘨𝘪𝘤 𝘰𝘧 𝘢 𝘨𝘳𝘦𝘢𝘵 𝘤𝘶𝘱 𝘰𝘧 𝘤𝘰𝘧𝘧𝘦𝘦 𝘢𝘯𝘥 𝘵𝘩𝘦 𝘫𝘰𝘺 𝘪𝘵 𝘣𝘳𝘪𝘯𝘨𝘴
          </p>
          <p className="text-lg mb-8">
            𝘕𝘦𝘴𝘵𝘭𝘦𝘥 𝘪𝘯 𝘵𝘩𝘦 𝘩𝘦𝘢𝘳𝘵 𝘰𝘧 𝘚𝘪𝘭𝘪𝘢𝘯𝘢
          </p>
        </div>
        <div className="absolute right-20 bottom-0 top-20 transform translate-x-1/5 w-[25%]">
          <img
            src={coffeeImage}
            alt="Coffee"
            className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 animate-bounceIn"
          />
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Enter your email here" 
            className="p-3 rounded-md text-gray-900 absolute left-20 top-40" 
          />
        </div>
        <button
          type="button"
          className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-2 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-3 me-10 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
          style={{ marginTop: '162px', marginRight: '770px' }}
        >
          Get your Card
        </button>
      </section>
    </>
  )
}
