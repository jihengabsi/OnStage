//
//  VideoCollectionViewCell.swift
//  OnStage
//
//  Created by Jihen Gabsi on 12/4/2022.
//

import UIKit
import AVFoundation

protocol VideoCollectionViewCellDelegate: AnyObject {
    func didTapLikeButton(with model : VideoModel)
    func didTapProfileButton(with model : VideoModel)

}

class VideoCollectionViewCell: UICollectionViewCell {
    static let identifier = "VideoCollectionViewCell"
    //Labels
    private let usernameLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = .white
        return label
    }()
    private let audioLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = .white
        return label
    }()
    private let captionLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.textColor = .white
        return label
    }()
    //Buttons
    private let profileButton: UIButton = {
        let button = UIButton()
        button.setBackgroundImage(UIImage(systemName: "person.circle"), for: .normal)
        
        return button
    }()
    private let likeButton: UIButton = {
        let button = UIButton()
        button.setBackgroundImage(UIImage(systemName: "heart"), for: .normal)
        return button
    }()
    private let videoContainer = UIView()
    
    //Delegate
    weak var delegate: VideoCollectionViewCellDelegate?
    //Subviews
    var player : AVPlayer?
    private var model: VideoModel?
    
    override init(frame:CGRect){
        super.init(frame: frame)
        contentView.backgroundColor = .black
        contentView.clipsToBounds = true
        addSubviews()
    }
    private func addSubviews(){
        contentView.addSubview(videoContainer)
        contentView.addSubview(usernameLabel)
        contentView.addSubview(captionLabel)
        contentView.addSubview(audioLabel)

        contentView.addSubview(profileButton)
        contentView.addSubview(likeButton)


        // Add actions
        likeButton.addTarget(self, action:  #selector(didTapLikeButton), for: .touchDown)
        profileButton.addTarget(self, action:  #selector(didTapProfileButton), for: .touchDown)
        profileButton.tintColor = .white
        likeButton.tintColor = .white
        videoContainer.clipsToBounds = true
        
        contentView.sendSubviewToBack(videoContainer)
    }
    @objc private func didTapLikeButton(){
        guard let model = model else {return}
        delegate?.didTapLikeButton(with: model)
    }
    @objc private func didTapProfileButton(){
        guard let model = model else {return}
        delegate?.didTapProfileButton(with: model)
        
    }
    override func layoutSubviews() {
        super.layoutSubviews()
        
        videoContainer.frame = contentView.bounds
        
        let size = contentView.frame.size.width/9
        let width = contentView.frame.size.width
        let height = contentView.frame.size.height-100
        //Buttons
        profileButton.frame = CGRect(x:width-size,y:height-size ,width:size,height: size)
        likeButton.frame = CGRect(x:width-size,y:height-(size*2)-10 ,width:size,height: size)
        

        //labels
        audioLabel.frame = CGRect(x:5,y:height-30,width:width-size-10,height:50)
        captionLabel.frame = CGRect(x:5,y:height-80,width:width-size-10,height:50)
        usernameLabel.frame = CGRect(x:5,y:height-120,width:width-size-10,height:50)
        
    }
    override func prepareForReuse() {
        super.prepareForReuse()
        captionLabel.text = nil
        audioLabel.text = nil
        usernameLabel.text = nil
    }
    public func configure(with model: VideoModel){
        self.model = model
        configureVideo()
        
        //labels
        captionLabel.text = model.caption
        audioLabel.text = model.audioTrackName
        usernameLabel.text = model.username

    }
        private func configureVideo(){
            guard let model = model else{
                return 
            }
            guard let path = Bundle.main.path(forResource: model.videoFileName, ofType: model.videoFileFormat)else{ return
            
        }
            player = AVPlayer(url : URL(fileURLWithPath: path))
            
            let playerView = AVPlayerLayer()
            playerView.player = player
            playerView.frame = contentView.bounds
            playerView.videoGravity = .resizeAspectFill
            videoContainer.layer.addSublayer(playerView)
            player?.volume = 0
            player?.play()
        }
   
    

    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
}
