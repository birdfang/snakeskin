import posed from 'react-pose'

const PageContainer = posed.div({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
});

export {
    PageContainer
}