# IV Strategies Research Hub

A secure, client-facing platform for delivering strategic proposals, research documents, and merchandise strategies to stakeholders.

## Product Overview

The Research Hub was developed to address a core business need: providing clients with secure, branded access to their strategic deliverables while maintaining strict access control between different client accounts.

### Problem Statement

The agency required a centralised platform where:
- Clients could access only their own proposals and research
- Admin users could view and manage all client materials
- Documents could be presented professionally with consistent branding
- Stakeholders could download materials as PDFs for offline review

### Solution

A role-based access portal that authenticates users via password and dynamically displays only the projects they are authorised to view.

## Key Features

### Access Control
- Password-based authentication with role-specific access
- Each password unlocks a specific client view
- Admin credentials provide visibility across all client materials
- Unauthorised access attempts redirect to login

### Project Management
- Searchable project directory with filtering by type and client
- Tag-based categorisation (Proposal, Merchandise, Internal, Briefing)
- Admin-only client filter for cross-account visibility
- Results count for active filters

### Document Presentation
- Consistent visual design across all proposals
- Tabbed navigation for multi-section documents
- Print-optimised layouts for PDF export
- Responsive design for desktop and mobile access

### Scalability Considerations
- Search functionality supports growing project volumes
- Filter architecture designed for hundreds of entries
- Modular page structure for rapid content addition

## User Roles

| Role | Access Level | Use Case |
|------|-------------|----------|
| Client | Single project view | External stakeholders reviewing their specific proposals |
| Admin | All projects | Internal team managing and presenting materials |

## Project Structure

```
/app
  /login              Authentication page
  /[project-name]     Individual proposal pages
  /api/auth           NextAuth authentication endpoints
  /api/briefing       Client briefing form submissions
/components           Reusable UI components
/lib                  Authentication configuration
```

## Adding New Projects

1. Create a new directory under `/app/` with the project slug
2. Build the page using existing component patterns (Card, Tabs, Header)
3. Add the project entry to the projects array in `/app/page.tsx`
4. Assign appropriate `allowedClients` for access control
5. Add credentials to `/lib/auth.ts` if creating a new client

## Technical Stack

- Next.js 16 with App Router
- TypeScript
- NextAuth.js for authentication
- Tailwind CSS
- Vercel deployment

## Configuration

### Environment Variables

```
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://your-domain.com
```

### Authentication

Client credentials are configured in `/lib/auth.ts`. Each entry maps a password to a client ID that determines project visibility.

## Deployment

The application deploys automatically to Vercel on push to the main branch. Production builds are validated before deployment.

## Roadmap Considerations

- Sorting options (date, alphabetical, client)
- Analytics dashboard for document engagement
- Client self-service briefing submissions
- Version history for updated proposals

---

IV Strategies | Internal Documentation
