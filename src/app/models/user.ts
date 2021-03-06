export class Email {
    value: string;
    type?: string;
}

export class Photo {
    value: string
}

export class Profile {
        // The provider with which the user authenticated (facebook, twitter, etc.).
        profile: string;

        // A unique identifier for the user, as generated by the service provider.
        id: string;

        // The name of this user, suitable for display.
        displayName: string;

        // The token returned from the provider
        token: string;

        name: Name;

        emails: Email[] = [];
        photos: Photo[] = [];
}

export class Name {
        // The family name of this user, or "last name" in most Western languages.
        familyName: String = '';

        // The given name of this user, or "first name" in most Western languages.
        givenName: String = '';

        // The middle name of this user.
        middleName?: String = '';
}

export class User {
        name: Name = new Name();
        local?: {
            email: String;
            password: String;
        };
        facebook?: Profile;
        google?: Profile;
}