'use client';
import { cn } from '@/lib/utils';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';
import { useState } from 'react';
import { algorithmCategories } from '@/data/algorithmCategories';

function Navbar({ className }: Readonly<{ className?: string }>) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <header
      className={cn(
        'flex justify-between items-center border-2 inset-x-0 w-full mx-auto relative z-50 px-8',
        className
      )}
    >
      <p className="text-2xl">Algosim</p>
      <div className="flex gap-2">
        {algorithmCategories.map((algoCategory) => (
          <Menu setActive={setActive} key={algoCategory.title}>
            <MenuItem
              setActive={setActive}
              active={active}
              item={algoCategory.title}
            >
              <div className="flex flex-col space-y-4 text-sm">
                {algoCategory.items.map((algo) => (
                  <HoveredLink key={algo.href} href={algo.href}>
                    {algo.name}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>
          </Menu>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
