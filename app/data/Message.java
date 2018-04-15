package data;

public class Message {
    public String text;
    public enum Sender{USER,BOT};
    public  FeedResponse feedResponse=new FeedResponse();
    public Sender sender;

}
