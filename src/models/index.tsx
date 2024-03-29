export interface UserEntity {
    id: string;
    name: string;
    thumb: string;
}

export interface ArtEntity {
    id: string;
    title: string;
    type: ArtType;
    thumb: string;
    description: string;
    star: number;
    isStarred: boolean;
    user: UserEntity;
    codes: CodeEntity[];
    tags: TagEntity[];
}

export interface CodeEntity {
    id: string;
    type: CodeType;
    text: string;
}

export interface TagEntity {
    id: string;
    text: string;
}

export enum ArtType {
    GLSL = 1
}

export namespace ArtType {
    export function getName(artType: ArtType) {
        switch (artType) {
            case ArtType.GLSL:
                return 'GLSL';

            default:
                return '';
        }
    }
}

export enum CodeType {
    VERTEX_SHADER = 1,
    FRAGMENT_SHADER = 2
}

export namespace CodeType {
    export function getName(codeType: CodeType) {
        switch (codeType) {
            case CodeType.VERTEX_SHADER:
                return 'Vertex Shader';

            case CodeType.FRAGMENT_SHADER:
                return 'Freagment Shader';

            default:
                return '';
        }
    }
}

export enum PaneMode {
    OVERLAY = 1,
    SPLIT = 2
}

export namespace PaneMode {
    export function getName(paneMode: PaneMode) {
        switch (paneMode) {
            case PaneMode.OVERLAY:
                return 'Overlay';

            case PaneMode.SPLIT:
                return 'Split';

            default:
                return '';
        }
    }
}