import React, { useEffect, useState, useContext, createContext } from 'react'
import conf from './gampp.conf'

export const GamppContext = createContext();

export function GamppContextProvider({ children }) {
    const [url, setUrl] = useState('/');
    const [content, setContent] = useState({ directories: [], files: [] });
    const [loadingContent, setLoadingContent] = useState(true);

    useEffect(() => {
        (async () => {
            setLoadingContent(true);
            await loadContent();
            setLoadingContent(false);
        })();
        // eslint-disable-next-line
    }, [url]);

    const loadContent = async () => {
        const req = await fetch(`http://${conf.hostname}:${conf.port}${url}json`); // http://localhost:5000/json
        const res = await req.json();
        setContent(res);
    }

    return (
        <GamppContext.Provider value={{
            url,
            setUrl,
            content,
            setContent,
            loadingContent,
            setLoadingContent
        }}>
            {children}
        </GamppContext.Provider>
    )
}

export function GamppTitle({ Component }) {
    const { url } = useContext(GamppContext);

    return (
        <Component text={`Content of /servers${url}`} />
    )
}

export function GamppContentUpDir({ Component }) {
    const { url, setUrl } = useContext(GamppContext);

    const goUp = url => {
        let newUrl = url.split('/');
        newUrl.pop()
        newUrl.pop()
        newUrl = newUrl.join('/')
        setUrl(`${newUrl}/`)
    }

    return (
        <Component
            props={{
                onClick: () => goUp(url)
            }}
        />
    )
}

export function GamppContentExplorer({ Folder, File }) {
    const { content, url, setUrl } = useContext(GamppContext);

    const goToFolder = name => {
        setUrl(`${url}${name}/`); // old/new/
    }

    const goToFile = name => {
        window.location = `http://${conf.hostname}:${conf.port}${url}${name}`
    }

    return (
        <>
            {content.directories.map((directory, idx) => (
                <Folder
                    key={idx}
                    name={directory}
                    props={{ onClick: () => goToFolder(directory) }}
                />
            ))}

            {content.files.map((file, idx) => (
                <File
                    key={idx}
                    name={file}
                    props={{ onClick: () => goToFile(file) }}
                />
            ))}
        </>
    )
}

export function GamppThemeContent({
    Title,
    Content,
    ContentUpDir,
    ContentLoader,
    Footer,
}) {
    const { loadingContent, content } = useContext(GamppContext)

    return (
        <>
            <Title />
            {loadingContent ? <ContentLoader /> : (
                <>
                    <ContentUpDir />
                    <Content />
                    <Footer
                        platform={content.platform}
                        version={content.version}
                    />
                </>
            )}
        </>
    )
}

export function GamppTheme(data) {
    return (
        <GamppContextProvider>
            <GamppThemeContent {...data} />
        </GamppContextProvider>
    )
}
