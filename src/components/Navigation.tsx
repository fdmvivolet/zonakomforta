import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center items-center px-margin-mobile h-16 bg-surface shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" alt="Логотип" className="h-10 w-10 rounded-full object-cover" />
        <h1 className="font-headline-md text-headline-sm-mobile font-bold text-primary">
          Зона Комфорта
        </h1>
      </div>
    </header>
  );
}

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface border-t border-outline-variant/10 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <NavItem to="/" icon="home" label="Главная" />
      <NavItem to="/menu" icon="coffee_maker" label="Меню" fillIcon />
      <NavItem to="/about" icon="info" label="О нас" />
    </nav>
  );
}

function NavItem({ to, icon, label, fillIcon = false }: { to: string; icon: string; label: string; fillIcon?: boolean }) {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 active:scale-95 ${
          isActive 
            ? 'bg-primary-container text-on-primary-container shadow-sm' 
            : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span 
            className="material-symbols-outlined text-2xl mb-1" 
            style={isActive || fillIcon ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            {icon}
          </span>
          <span className="font-label-sm text-[10px] leading-none">
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}
