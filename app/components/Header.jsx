import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar 
      position="static"
      sx={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: '#333333' }}
        >
          Shahulog
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="/" underline="hover" color="inherit" sx={{ color: '#333333' }}>
            ホーム
          </Link>
          <Link href="/" underline="hover" color="inherit" sx={{ color: '#333333' }}>
            ブログ
          </Link>
          <Link href="/" underline="hover" color="inherit" sx={{ color: '#333333' }}>
            お問い合わせ
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;