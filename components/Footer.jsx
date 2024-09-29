import { FaFacebookF, FaInstagram, FaAt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer class="bg-zinc-800 text-zinc-100 text-center py-40">
      <h2 class="text-4xl font-bold">Let's make your dream item</h2>
      <div class="flex flex-wrap gap-6 justify-center mt-10">
        <FaFacebookF class="lab la-facebook-f text-4xl" />
        <FaInstagram class="lab la-instagram text-4xl" />
        <FaAt class="las la-at text-4xl" />
      </div>
    </footer>
  )
};

export default Footer;