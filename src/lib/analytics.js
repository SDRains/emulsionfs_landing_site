import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

export const analytics = Analytics({
    app: 'emulsionfs_landing_page',
    plugins: [
        googleAnalytics({
            measurementIds: [process.env.PUBLIC_NEXT_GA_TAG]
        })
    ]
})