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
