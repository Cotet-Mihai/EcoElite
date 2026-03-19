import {LucideIcon} from "lucide-react";
import {cn} from '@/lib/utils'

type Props = {
    text: string
    positionX: string,
    positionY: string,
    icon: LucideIcon
    bubbleX: 'top' | 'bottom',
    bubbleY: 'left' | 'right',
    animationDelay: 'animation-delay-1000' | 'animation-delay-2000' | 'animation-delay-2500'
}

export default function FlaotingBadge({text, positionX, positionY, icon: Icon, bubbleX='top', bubbleY='right', animationDelay='animation-delay-1000'}: Props) {

    return (
        <div className={`absolute animate-float ${positionX} ${positionY} ${animationDelay}`}>
            <div className="flex">
                <div className="relative w-12 h-12 z-10 rounded-full bg-card flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className={cn(
                        `absolute py-3 px-6 rounded-full border border-primary/20 text-white text-sm font-bold whitespace-nowrap bg-primary/20 backdrop-blur-xl shadow-xl`,
                        bubbleX === 'top' ? 'bottom-5' : 'top-5',
                        bubbleY === 'left' ? 'right-8' : 'left-8'
                    )}>
                        {text}
                    </h3>
                </div>
            </div>
        </div>
    )
}