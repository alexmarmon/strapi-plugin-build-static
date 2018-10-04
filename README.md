# Strapi plugin

# Normal Installation
1.

# Making Changes
1. Follow the Development Environment Setup steps [here.](https://github.com/alexmarmon/strapi/blob/master/docs/3.x.x/en/plugin-development/quick-start.md)
2. Create a new Strapi Dev project `strapi new myDevelopmentProject --dev`
3. Go to plugins folder `cd myDevelopmentProject/plugins/`
4. Clone this repo `git clone git@github.com:alexmarmon/strapi-plugin-build-static.git`
5. Cd into plugin `cd strapi-plugin-build-static`
6. Link strapi helper `npm link strapi-helper-plugin`
7. Make changes
8. Run build command `npm run build`
9. Copy plugin to production project `cd ../; cp -R strapi-plugin-build-static/ ../../myActualStrapiProject`