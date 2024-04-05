import styled from "styled-components";

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const ProfileTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

export const ProfileForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProfileInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`;

export const ProfileButton = styled.button`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        background-color: #333;
    }
`;

export const ProfileError = styled.span`
    color: red;
    margin-top: 10px;
`;

export const ProfileSuccess = styled.span`
    color: green;
    margin-top: 10px;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const ProfileImageInput = styled.input`
    display: none;
`;

export const ProfileImageLabel = styled.label`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        background-color: #333;
    }
`;

export const ProfileImageError = styled.span`
    color: red;
    margin-top: 10px;
`;

export const ProfileImageSuccess = styled.span`
    color: green;
    margin-top: 10px;
`;

export const ProfileImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProfileImageTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const ProfileImagePreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const ProfileImageUploadButton = styled.button`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        background-color: #333;
    }
`;

export const ProfileImageUploadError = styled.span`
    color: red;
    margin-top: 10px;
`;

export const ProfileImageUploadSuccess = styled.span`
    color: green;
    margin-top: 10px;
`;

export const ProfileImageUploadInput = styled.input`
    display: none;
`;

export const ProfileImageUploadLabel = styled.label`
    padding: 10px 20px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        background-color: #333;
    }
`;

export const ProfileImageUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProfileImageUploadTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
`;

export const ProfileImageUploadPreview = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
