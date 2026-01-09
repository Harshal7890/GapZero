import Navbar from '../components/main/Navbar';
import { RefreshCcw, Sparkles, Target, Users, Zap } from "lucide-react";


const Landing = () => {
    return (
        <div className="hidden xl:flex flex-col h-full overflow-y-auto border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 custom-scrollbar">
            <Navbar />
            <div className="mx-auto w-5xl px-12 py-16 space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Sparkles className="w-4 h-4" />
                        <span>Welcome to the future of hiring</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Find your dream job <span className="text-primary">in seconds.</span>
                    </h1>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                        SoHired revolutionizes the way you connect with opportunities.
                        Swipe right to apply, left to pass. No more clunky forms or endless searching.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Instant Matches</h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            AI-powered algorithms match you with companies that fit your skills and culture perfectly.
                        </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 transition-colors">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Direct Connection</h3>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Skip the middleman. Chat directly with hiring managers when you match.
                        </p>
                    </div>
                </div>

                {/* How it works */}
                <div className="space-y-8 py-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Target className="w-6 h-6 text-primary" />
                        How it works
                    </h2>
                    <div className="space-y-6">
                        {[
                            "Create your profile and upload your resume",
                            "Set your preferences for role, location, and salary",
                            "Swipe through curated job cards tailored to you",
                            "Match and start handling interviews instantly"
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <div className="flex-none w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                    {i + 1}
                                </div>
                                <p className="text-lg text-neutral-600 dark:text-neutral-300 pt-0.5">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial / Social Proof */}
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-700 border-2 border-white dark:border-neutral-900" />
                            ))}
                        </div>
                        <p className="text-sm font-medium text-neutral-500">Trusted by 10,000+ developers</p>
                    </div>
                </div>

                {/* Footer / Extra Content to ensure scrolling */}
                <div className="py-12 text-sm text-neutral-400 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                    <p>© 2024 SoHired Inc. All rights reserved.</p>
                    <p>Made with ❤️ for developers.</p>
                </div>
            </div>
        </div>
    )
}

export default Landing