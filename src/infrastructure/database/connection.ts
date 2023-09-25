import mongoose, { ConnectOptions } from 'mongoose';

class Database {
    private readonly uri: string;
    private readonly options: ConnectOptions;

    constructor(uri: string, options?: ConnectOptions) {
        this.uri = uri;
        this.options = Object.assign(
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
            options
        );
    }

    public async connect(): Promise<void> {
        try {
            await mongoose.connect(this.uri, this.options);
            console.log('Database connected successfully');
        } catch (error) {
            console.error('Database connection error:', error);
            throw error;
        }
    }

    public async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
            console.log('Database disconnected successfully');
        } catch (error) {
            console.error('Database disconnection error:', error);
            throw error;
        }
    }
}

export default Database;
