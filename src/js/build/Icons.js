const fs = require('fs').promises;
const camelcase = require('camelcase');

async function getIcons () {
    let files = await fs.readdir('./src/icons');
    return Promise.all(
        files.map( async (file) => ({
            svg: await fs.readFile(`./src/icons/${file}`, 'utf-8'),
            componentName: `${camelcase(file.replace(/\.svg$/, ''), { pascalCase: true })}Icon`
        }))
    );
}


async function buildIcons () {
    let icons = await getIcons();

    await Promise.all(
        icons.map( async ({ svg, componentName }) => {
            await fs.writeFile(`./src/js/components/icons/${componentName}.vue`, createdTemplate(svg, componentName));
        })
    )
}

const createdTemplate = (svg, componentName) => `
    <template>
        ${svg}
    </template>
    <script>
        export default {
            name: '${componentName}',
        }
    </script>
`;

buildIcons();