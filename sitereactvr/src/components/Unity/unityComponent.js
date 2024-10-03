import React, { useEffect, useRef, useCallback } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityComponent = ({ loaderUrl, dataUrl, frameworkUrl, codeUrl, width, height, isActive, onClick }) => {
    const { unityProvider, isLoaded, loadingProgression, error } = useUnityContext({
        loaderUrl,
        dataUrl,
        frameworkUrl,
        codeUrl,
    });

    const unityCanvasRef = useRef(null);

    const handleUnityMessage = useCallback((message) => {
        if (isActive) {
            console.log('Message from Unity:', message);
        }
    }, [isActive]);

    useEffect(() => {
        if (error) {
            console.error('Unity error:', error);
        }
    }, [error]);

    useEffect(() => {
        if (isLoaded && isActive && unityCanvasRef.current) {
            unityCanvasRef.current.focus(); // Focus the Unity canvas when active
        }
    }, [isLoaded, isActive]);

    if (error) {
        return <div>Error loading Unity content: {error.message}</div>;
    }

    return (
        <div onClick={onClick}>
            {!isLoaded && (
                <p>Loading Unity WebGL... {Math.round(loadingProgression * 100)}%</p>
            )}
            <Unity
                unityProvider={unityProvider}
                style={{ width: width || "800px", height: height || "600px" }}
                ref={unityCanvasRef}
                tabIndex={isActive ? "0" : "-1"} // Allow tab focus only for the active Unity instance
                onMessage={handleUnityMessage}
            />
        </div>
    );
};

export default UnityComponent;