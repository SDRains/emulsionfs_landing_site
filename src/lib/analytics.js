import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const analytics = Analytics({
    app: 'awesome-app',
    plugins: [
        googleAnalytics({
            measurementIds: ['G-BMPH4RW78T']
        })
    ]
})