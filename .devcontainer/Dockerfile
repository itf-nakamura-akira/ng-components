FROM mcr.microsoft.com/devcontainers/base:noble

# [Optional] Uncomment this section to install additional OS packages.
RUN apt update && export DEBIAN_FRONTEND=noninteractive \
    && apt -y install --no-install-recommends \
    curl

# Nodejs 24
# https://github.com/nodesource/distributions/blob/master/DEV_README.md#ubuntu-versions
RUN curl -fsSL https://deb.nodesource.com/setup_24.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install -y nodejs
RUN rm nodesource_setup.sh

# pnpm
# https://pnpm.io/ja/installation
RUN npm install -g pnpm
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Angular CLI
# https://angular.dev/tools/cli/setup-local
RUN pnpm install -g @angular/cli

# GitHub CLI
# https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
RUN apt update
RUN apt install gh
