import React from "react";

interface ResponsiveViewProps{
    mobile: React.ReactNode;
    desktop: React.ReactNode;
    className?: string
}

export default function ResponsiveView({mobile, desktop, className}:ResponsiveViewProps){
    return (
        <div className={className}>
            <div className="block md:hidden">{mobile}</div>
            <div className="hidden md:block">{desktop}</div>
        </div>
    )
}