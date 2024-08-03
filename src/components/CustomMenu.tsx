import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { ChevronDown } from 'lucide-react';
import { MenuList } from '@mui/material';

interface MenuProps {
  title: string;
  children: React.ReactNode;
}

export function CustomMenu({ title, children }: MenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMouseOver = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseOver={handleMouseOver}
        variant='text'
        sx={{ marginBottom: '-6px' }}
      >
        {title} <ChevronDown size={16} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuList onMouseLeave={handleMouseLeave} sx={{ all: 'unset' }}>{children}</MenuList>
      </Menu>
    </div>
  );
}