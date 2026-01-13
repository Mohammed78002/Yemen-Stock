export default async function handler(req, res) {
    // محاكاة سحب السعر الحقيقي (سعر القديم مقابل الجديد)
    // سنضع هنا منطقاً يتذبذب ليعطي اللعبة حماس
    const baseRate = 530; 
    const randomDrift = (Math.random() * 4) - 2; 
    const finalRate = (baseRate + randomDrift).toFixed(2);

    res.status(200).json({
        success: true,
        rate: finalRate,
        pair: "100:1000",
        timestamp: new Date().toISOString()
    });
}

