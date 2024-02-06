import kabaa from './kabaa.svg';

export default function Header() {
return (
<div className="bg-gold-light py-4 px-4  flex items-center justify-between">
  <div>
    <span className="text-lg font-bold block">التصاريح</span>
    <span className="text-lg block">قائمة التصاريح الخاصة بك</span>
  </div>
  <img src={kabaa} alt="Kabaa" className="h-12 flex-none" />
</div>
);
}