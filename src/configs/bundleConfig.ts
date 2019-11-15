/* const Res = {
    ResolvePlugin({
        extensions: ['.ts', '.tsx'],  [ '.mjs', '.js', '.json', '.node' ]
        module: true,
    }
} 



const keysTransformer = require('ts-transformer-keys/transformer').default;
const transformer = (service) =>
{
    before: [ keysTransformer(service.getProgram()) ],
    after: []
};
 
// ...
plugins: [
    typescript({ transformers: [transformer] })
]


*/