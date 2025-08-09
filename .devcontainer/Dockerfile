FROM mcr.microsoft.com/devcontainers/base:noble

# [Optional] Uncomment this section to install additional OS packages.
RUN apt update && export DEBIAN_FRONTEND=noninteractive \
    && apt -y install --no-install-recommends \
    curl

# Nodejs 24
# https://github.com/nodesource/distributions/blob/master/DEV_README.md#ubuntu-versions
RUN curl -fsSL https://deb.nodesource.com/setup_24.x -o nodesource_setup.sh
RUN sudo -E bash nodesource_setup.sh
RUN sudo apt install -y nodejs
RUN rm nodesource_setup.sh
