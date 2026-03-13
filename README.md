# Portfolio - Dikta Pradika

This is a professional portfolio website built with React, Vite, and Tailwind CSS.

## Deployment to GitHub Pages

This project is configured to be deployed automatically using GitHub Actions.

### Steps to Deploy:

1. **Create a new repository** on GitHub.
2. **Push the code** to the `main` branch:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site whenever you push to the `main` branch.

### Troubleshooting:

If your deployment is failing, check these common issues:

1.  **GitHub Actions Permissions**:
    -   Go to **Settings** > **Actions** > **General**.
    -   Ensure **Workflow permissions** is set to **Read and write permissions**.
2.  **Pages Source**:
    -   Go to **Settings** > **Pages**.
    -   Under **Build and deployment** > **Source**, you **MUST** select **GitHub Actions** (NOT "Deploy from a branch").
3.  **Branch Name**:
    -   The workflow is set to run on `main` or `master`. If your branch is named differently, update `.github/workflows/deploy.yml`.
4.  **Actions Tab**:
    -   Click the **Actions** tab at the top of your repository to see the build logs. If there's a red "X", click it to see exactly what failed.
