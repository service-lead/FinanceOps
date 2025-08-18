# OpsTeam Workspace Application

A modern web application with authentication and three business applications: FinanceOps+, HealthOps AI, and SalesOps AI.

## Features

- **Secure Authentication**: Login system with admin/admin credentials
- **Modern Dashboard**: Clean, responsive design matching the provided screenshots
- **Three Applications**:
  - **FinanceOps+**: Clickable app that opens app.opsteam.com.au in a modal
  - **HealthOps AI**: Non-clickable app (shows "not available" message)
  - **SalesOps AI**: Non-clickable app (shows "not available" message)

## Files Structure

- `index.html` - Login page
- `dashboard.html` - Main dashboard after authentication
- `styles.css` - All styling for both pages
- `script.js` - JavaScript functionality and authentication logic
- `README.md` - This file

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Login**: Use the credentials:
   - Username: `admin`
   - Password: `admin`
3. **Access Dashboard**: After successful login, you'll be redirected to the dashboard
4. **Use FinanceOps+**: Click on the FinanceOps+ app card to open app.opsteam.com.au in a modal
5. **Other Apps**: HealthOps AI and SalesOps AI are non-clickable and will show "not available" messages
6. **Logout**: Click on your profile icon (S) to logout

## Technical Details

- **Authentication**: Uses localStorage for session management
- **Responsive Design**: Works on desktop and mobile devices
- **Modal System**: FinanceOps+ opens in a full-screen modal with iframe
- **Interactive Elements**: Hover effects, clickable states, and visual feedback
- **Security**: Redirects unauthenticated users to login page

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design for mobile devices

## Customization

You can easily customize:
- Colors and styling in `styles.css`
- App icons and descriptions in `dashboard.html`
- Authentication logic in `script.js`
- Add more applications by copying the app-card structure

## Security Notes

- This is a frontend-only implementation for demonstration purposes
- In production, implement proper backend authentication
- Consider using HTTPS for secure communication
- Implement proper session management and token-based authentication

