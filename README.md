# Prateek Prasanna Savanur - Portfolio Website

A modern, responsive portfolio website showcasing blockchain development expertise and full-stack engineering skills. Features an integrated AI chatbot for visitor interaction.

## Features

- **Modern Design**: Black and white themed, fully responsive
- **AI Chatbot**: Interactive assistant that answers questions about skills, projects, and experience
- **Project Showcase**: Detailed portfolio of blockchain and full-stack projects
- **Contact Integration**: Working contact form with project type selection
- **Social Media Links**: Complete social media presence integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Build Tool**: Vite
- **UI Components**: Radix UI, Shadcn/ui
- **Icons**: Lucide React, React Icons
- **Animations**: Framer Motion

## Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd prateek-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   Open http://localhost:5000 in your browser

## Deployment on Render

### Method 1: Using Render Dashboard (Recommended)

1. **Prepare your code**
   - Push your code to GitHub repository
   - Ensure all files are committed including `render.yaml`

2. **Create Render account**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

3. **Deploy the application**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Render will automatically detect the `render.yaml` configuration
   - Click "Create Web Service"

4. **Configuration (Auto-detected from render.yaml)**
   - **Name**: prateek-portfolio
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Method 2: Manual Configuration

If you prefer manual setup:

1. **Create new Web Service**
   - Choose "Build and deploy from a Git repository"
   - Connect your GitHub repository

2. **Configure the service**
   - **Name**: prateek-portfolio
   - **Root Directory**: (leave empty)
   - **Environment**: Node
   - **Region**: Choose closest to your audience
   - **Branch**: main (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

3. **Environment Variables**
   ```
   NODE_ENV=production
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application

## Build Process

The deployment process includes:

1. **Install Dependencies**: `npm install`
2. **Build Frontend**: Vite builds the React application
3. **Build Backend**: ESBuild bundles the server code
4. **Start Production Server**: Serves both frontend and API

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Application pages
│   │   └── lib/            # Utilities and configuration
├── server/                 # Backend Express server
│   ├── routes.ts          # API routes
│   ├── services/          # Business logic
│   └── storage.ts         # Data storage
├── shared/                # Shared types and schemas
├── render.yaml           # Render deployment configuration
├── Dockerfile            # Docker configuration (optional)
└── package.json          # Dependencies and scripts
```

## API Endpoints

- `POST /api/chat` - Chatbot interaction
- `POST /api/contact` - Contact form submission
- `GET /api/chat/history` - Chat history (admin)

## Features Overview

### AI Chatbot
- Local knowledge-based responses
- No external API dependencies
- Comprehensive information about skills, projects, and experience

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Modern CSS Grid and Flexbox layouts

### Contact Form
- Project type selection
- Form validation
- Success/error handling

## Deployment Notes

- **Free Tier**: Render's free tier includes 750 hours per month
- **Auto-Deploy**: Automatic deployments on code push
- **HTTPS**: Automatic SSL certificate
- **Custom Domain**: Can be configured in Render dashboard
- **Monitoring**: Built-in logging and monitoring

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are in package.json
   - Review build logs in Render dashboard

2. **Application Not Loading**
   - Check start command configuration
   - Verify PORT environment variable usage
   - Review application logs

3. **API Endpoints Not Working**
   - Ensure backend routes are properly configured
   - Check Express server setup
   - Verify API paths in frontend

### Support

For deployment issues:
- Check Render's [documentation](https://render.com/docs)
- Review application logs in Render dashboard
- Contact: prateeksavanur@duck.com

## License

MIT License - feel free to use this as a template for your own portfolio.

---

**Live Site**: [Your Render URL will be here after deployment]
**GitHub**: [Your GitHub repository URL]
**Contact**: prateeksavanur@duck.com