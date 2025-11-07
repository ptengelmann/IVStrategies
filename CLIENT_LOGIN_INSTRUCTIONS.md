# Client Login System - Quick Reference

## 🔐 Login Credentials

Your research hub now has client-specific access control. Each client can only see their own projects.

### Client Accounts

1. **AU Vodka Client**
   - Email: `client@auvodka.com`
   - Password: `auvodka2024`
   - Access: AU Vodka Personalisation Strategy

2. **Restaurant Tycoon Client**
   - Email: `client@restauranttycoon.com`
   - Password: `tycoon2024`
   - Access: Restaurant Tycoon 3 Merchandise Strategy

3. **Admin (IV Strategies)**
   - Email: `admin@ivstrategies.com`
   - Password: `admin2024`
   - Access: ALL projects

## 🚀 How It Works

1. **Login Required**: All users must log in to access the hub
2. **Project Filtering**: Clients only see their own projects on the hub
3. **Route Protection**: Clients cannot access other clients' project pages directly via URL
4. **Logout Button**: Top-right corner shows client name and logout option

## 📝 Before Your Presentation

**IMPORTANT: Change the passwords!**

1. Open: `research-app/lib/auth.ts`
2. Update the passwords for each client (lines 6-21)
3. Make them secure and unique
4. Share credentials securely with your clients

## 🔧 Adding New Clients

When you get new clients, follow these steps:

1. **Add client credentials** in `lib/auth.ts`:
```typescript
{
  id: "new-client-id",
  name: "Client Name",
  email: "client@email.com",
  password: "secure-password",
}
```

2. **Add client access to projects** in `app/page.tsx`:
```typescript
{
  title: "Your Project Title",
  // ... other fields
  allowedClients: ['new-client-id', 'admin']
}
```

3. **Add access check to project page** (e.g., `app/your-project/page.tsx`):
```typescript
const allowedClients = ['new-client-id', 'admin'];
```

## 🌐 Running the App

```bash
npm run dev
```

Then visit: http://localhost:3000 (or http://localhost:3002 if port 3000 is in use)

## ✅ Testing Before Presentation

1. Log in as AU Vodka client → Should only see AU Vodka project
2. Try to access `/restaurant-tycoon-3` → Should redirect to home
3. Logout and log in as Restaurant Tycoon client → Should only see Restaurant Tycoon project
4. Try to access `/au-vodka` → Should redirect to home
5. Log in as admin → Should see all projects

## 🔒 Security Notes

- Passwords are stored in code (fine for small client base)
- Client-side protection prevents accidental access
- For production with many clients, consider a database
- Change the `NEXTAUTH_SECRET` in `.env.local` to something secure:
  ```bash
  openssl rand -base64 32
  ```

## 📱 What Clients See

- **Clean login page** with email/password fields
- **Personalized hub** showing only their projects
- **Professional interface** with their name displayed
- **Easy logout** button when they're done

---

**Need help?** The authentication system uses NextAuth.js - all config is in `lib/auth.ts`
