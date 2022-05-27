import React, {FunctionComponent, SVGProps, useEffect, useState} from 'react';
import classes from './reactive-button.module.css';

interface ReactiveButtonProps {
    index: number
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<number>>
}

const ReactiveButton = ({index, Icon, active, setActive}: ReactiveButtonProps) => {
    const [iconStyle, setIconStyle] = useState(0);
    const [shadowStyle, setShadowStyle] = useState(-55);

    useEffect(() => {
        if (!active) {
            onAnimationReturn()
        } else {
            onAnimationStart()
        }
    }, [active])

    const onAnimationStart = () => {
        setIconStyle(55)
        setShadowStyle(0)
    };

    const onAnimationReturn = () => {
        setIconStyle(0)
        setShadowStyle(-55)
    };

    return (
        <div onMouseEnter={() => setActive(index)} onClick={() => setActive(index)} className={classes.container}>

            <Icon className={classes.icon} style={{transform: `translateY(${iconStyle}px)`}}/>

            <Icon className={classes.shadow} style={{transform: `translateY(${shadowStyle}px)`}}/>

        </div>
    );
};

export default React.memo(ReactiveButton);
