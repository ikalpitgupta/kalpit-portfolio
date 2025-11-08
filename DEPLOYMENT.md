# Deployment Guide - Kalpit Gupta Portfolio

## ✅ Your code is now on GitHub!
Repository: https://github.com/ikalpitgupta/kalpit-portfolio

## 🚀 Deploy to Vercel (Step-by-Step)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Click "Sign Up" or "Log In"
   - Choose "Continue with GitHub"

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Click "Import" next to your `kalpit-portfolio` repository
   - If you don't see it, click "Adjust GitHub App Permissions" and grant access

3. **Configure Project**
   - **Project Name**: kalpit-portfolio (or customize)
   - **Framework Preset**: Create React App (should auto-detect)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `build` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at: `https://kalpit-portfolio.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain if you have one

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Deploy to production
vercel --prod
```

## 🔄 Automatic Deployments

Once connected, Vercel will automatically:
- Deploy every push to the `main` branch
- Create preview deployments for pull requests
- Show build logs and deployment status

## 📝 Important Notes

1. **Profile Picture**: Make sure `public/kalpit-profile.jpg` is in your repository
2. **Environment Variables**: None required for this project
3. **Build Time**: First deployment takes 2-3 minutes
4. **Free Tier**: Vercel's free tier is perfect for this portfolio

## 🌐 Your Live URLs

After deployment, you'll get:
- **Production URL**: `https://kalpit-portfolio.vercel.app`
- **Custom Domain**: (if you add one)
- **Preview URLs**: For each commit/branch

## 🎯 Next Steps

1. Visit your Vercel dashboard to see deployment status
2. Share your portfolio link with recruiters and on LinkedIn
3. Any future changes: just push to GitHub, Vercel auto-deploys!

## 📧 Share Your Portfolio

Once deployed, share your link:
- LinkedIn Profile
- Resume/CV
- Email Signature
- GitHub README
- Job Applications

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
