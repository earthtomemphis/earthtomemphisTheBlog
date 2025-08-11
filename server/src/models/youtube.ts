import mongoose from 'mongoose';

const YouTubeSchema = new mongoose.Schema({
	url: String,
	thumbnail: String,
	description: String,
});

export default mongoose.model('YouTube', YouTubeSchema);
